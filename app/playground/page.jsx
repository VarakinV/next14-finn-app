
import PageHeader from '@/components/PageHeader'
import Trend from '@/components/Trend'
import TransactionItem from '@/components/TransactionItem'
import TransactionSummaryItem from '@/components/TransactionSummaryItem'
import Button from '@/components/Button'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Separator from '@/components/Separator'
import Skeleton from '@/components/Skeleton'

export default function Page() {
    return (
        <main className="space-y-8 mb-44">
            <h1 className="text-4xl mt-8">Playground</h1>
            <div>
                <h2 className="mb-4 text-lg font-mono">Page Header</h2>
                <Separator />
                <div><PageHeader /></div>
            </div>
            <div>
                <h2 className="mb-4 text-lg font-mono">Trend</h2>
                <Separator />
                <div className="flex space-x-8">
                    <Trend type="Income" amount={1000} prevAmount={900} />
                    <Trend type="Expense" amount={500} prevAmount={400} />
                    <Trend type="Investment" amount={100} prevAmount={120} />
                    <Trend type="Saving" amount={10} prevAmount={20} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
                <Separator />
                <div className="space-y-4">
                    <TransactionItem type="Income" description="Salary" amount={2000} />
                    <TransactionItem type="Expense" category="Food" description="Restaurant" amount={120} />
                    <TransactionItem type="Saving" description="For kids" amount={500} />
                    <TransactionItem type="Investment" description="RESP" amount={100} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Transaction Summary Item</h2>
                <Separator />
                <div className="space-y-4">
                    <TransactionSummaryItem date="2024-06-05" amount={3500} />
                    <Separator />
                    <TransactionItem type="Income" description="Salary" amount={2000} />
                    <TransactionItem type="Expense" category="Food" description="Restaurant" amount={120} />
                    <TransactionItem type="Saving" description="For kids" amount={500} />
                    <TransactionItem type="Investment" description="RESP" amount={100} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Button</h2>
                <Separator />
                <div className="space-x-4">
                    <div className="space-x-4">
                        <Button>Hello</Button>
                        <Button variant="outline">Hello</Button>
                        <Button variant="ghost">Hello</Button>

                        <Button size="xs">Xsmall</Button>
                        <Button size="sm">Hello</Button>
                        <Button size="lg">Hello</Button>
                    </div>

                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Forms</h2>
                <Separator />
                <div className="space-x-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-2 block">Your Name</Label>
                            <Input type="text" placeholder="Type Something..." />
                        </div>
                        <div>
                            <Label className="mb-2 block">City</Label>
                            <Select>
                                <option value="">Warsaw</option>
                                <option value="">London</option>
                                <option value="">Paris</option>
                                <option value="">Berlin</option>
                            </Select>
                        </div>
                        <div className="flex items-center">
                            <Input type="checkbox" id="terms" />
                            <Label htmlFor="terms" className="ml-2">Accept Terms</Label>
                        </div>
                    </div>


                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
                <Separator />
                <div className="space-y-8">
                    <div className="flex space-x-4">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <div className="space-y-4">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        </main>
    )
}
